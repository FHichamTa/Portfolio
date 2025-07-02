import pandas as pd
import matplotlib.pyplot as plt
from collections import Counter
import os
import json
from pathlib import Path
import numpy as np

def main():
    print("NETFLIX DATA ANALYZER")
    
    if Path('../public').exists():
        output_dir = Path('../public/data-projects/netflix')
    else:
        output_dir = Path('outputs')
    
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Load data
    print("Loading data")
    try:
        df = pd.read_csv('netflix_titles.csv')
        print(f"{len(df)} Netflix titles loaded")
    except:
        print("File not found")
    
    # Clean data
    print("Cleaning data")
    df = clean_data(df)
    print(f"{len(df)} titles after cleaning")
    
    # Analyze
    print("Analyzing data")
    stats = analyze_data(df)
    
    # Create visualizations
    print("Creating visualizations")
    create_visualizations(df, output_dir)
    
    # Save stats
    save_stats(stats, output_dir)
    
    print(f"Files generated in: {output_dir}")

def clean_data(df):
    df = df.dropna(subset=['title'])
    
    if 'release_year' in df.columns:
        df['release_year'] = pd.to_numeric(df['release_year'], errors='coerce')
        df = df.dropna(subset=['release_year'])
        df = df[df['release_year'] >= 1990]
    
    if 'type' in df.columns:
        df = df.dropna(subset=['type'])
    
    return df

def analyze_data(df):
    stats = {
        'total': len(df),
        'movies': len(df[df['type'] == 'Movie']) if 'type' in df.columns else 0,
        'shows': len(df[df['type'] == 'TV Show']) if 'type' in df.columns else 0,
    }
    
    # Years analysis
    if 'release_year' in df.columns:
        stats['year_min'] = int(df['release_year'].min())
        stats['year_max'] = int(df['release_year'].max())
        stats['peak_year'] = int(df['release_year'].mode().iloc[0])
    
    # Countries analysis
    if 'country' in df.columns:
        countries = []
        for country in df['country'].dropna():
            countries.extend([c.strip() for c in str(country).split(',')])
        
        if countries:
            country_counts = Counter(countries)
            stats['countries'] = len(set(countries))
            stats['top_country'] = country_counts.most_common(1)[0]
    
    # Genres analysis
    if 'listed_in' in df.columns:
        genres = []
        for genre_list in df['listed_in'].dropna():
            genres.extend([g.strip() for g in str(genre_list).split(',')])
        
        if genres:
            genre_counts = Counter(genres)
            stats['genres'] = len(set(genres))
            stats['top_genre'] = genre_counts.most_common(1)[0]
    
    return stats

def create_visualizations(df, output_dir):
    
    # Netflix style
    plt.style.use('dark_background')
    netflix_red = '#E50914'
    netflix_white = '#FFFFFF'
    
    # Overview
    fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(16, 12))
    fig.patch.set_facecolor('#000000')
    fig.suptitle('NETFLIX DATA ANALYSIS', 
                 fontsize=24, color=netflix_red, fontweight='bold', y=0.95)
    
    # Movies vs TV Shows
    if 'type' in df.columns:
        type_counts = df['type'].value_counts()
        ax1.pie(type_counts.values, labels=type_counts.index,
               colors=[netflix_red, netflix_white], autopct='%1.1f%%',
               startangle=90, textprops={'fontsize': 14, 'weight': 'bold'})
        ax1.set_title('Movies vs TV Shows', fontsize=16, color='white', pad=20)
    
    # Annual evolution
    if 'release_year' in df.columns:
        yearly = df['release_year'].value_counts().sort_index()
        ax2.plot(yearly.index, yearly.values, color=netflix_red, linewidth=4, marker='o')
        ax2.set_title('Content by year', fontsize=16, color='white', pad=20)
        ax2.set_xlabel('Year', color='white', fontweight='bold')
        ax2.set_ylabel('Number of titles', color='white', fontweight='bold')
        ax2.grid(True, alpha=0.3)
        ax2.tick_params(colors='white')
    
    # Top countries
    if 'country' in df.columns:
        countries = []
        for country in df['country'].dropna():
            countries.extend([c.strip() for c in str(country).split(',')])
        
        if countries:
            top_countries = Counter(countries).most_common(8)
            names = [c[0] for c in top_countries]
            counts = [c[1] for c in top_countries]
            
            ax3.barh(range(len(names)), counts, color=netflix_red)
            ax3.set_yticks(range(len(names)))
            ax3.set_yticklabels(names, color='white', fontweight='bold')
            ax3.set_title('Top countries', fontsize=16, color='white', pad=20)
            ax3.tick_params(colors='white')
    
    # Top genres
    if 'listed_in' in df.columns:
        genres = []
        for genre_list in df['listed_in'].dropna():
            genres.extend([g.strip() for g in str(genre_list).split(',')])
        
        if genres:
            top_genres = Counter(genres).most_common(8)
            names = [g[0][:12] for g in top_genres]
            counts = [g[1] for g in top_genres]
            
            ax4.bar(range(len(names)), counts, color=netflix_red)
            ax4.set_xticks(range(len(names)))
            ax4.set_xticklabels(names, rotation=45, ha='right', color='white', fontweight='bold')
            ax4.set_title('Top genres', fontsize=16, color='white', pad=20)
            ax4.tick_params(colors='white')
    
    plt.tight_layout(rect=[0, 0.03, 1, 0.92])
    plt.savefig(f'{output_dir}/netflix_overview.png', dpi=300, bbox_inches='tight', 
                facecolor='#000000', edgecolor='none')
    plt.close()
    
    # Trends
    if 'release_year' in df.columns and 'type' in df.columns:
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 8))
        fig.patch.set_facecolor('#000000')
        fig.suptitle('NETFLIX TRENDS', fontsize=20, color=netflix_red, fontweight='bold')
        
        # Movies vs Shows by year
        movies_yearly = df[df['type'] == 'Movie']['release_year'].value_counts().sort_index()
        shows_yearly = df[df['type'] == 'TV Show']['release_year'].value_counts().sort_index()
        
        ax1.plot(movies_yearly.index, movies_yearly.values, color=netflix_red, 
                linewidth=3, marker='o', label='Movies', markersize=5)
        ax1.plot(shows_yearly.index, shows_yearly.values, color=netflix_white, 
                linewidth=3, marker='s', label='TV Shows', markersize=5)
        ax1.set_title('Movies vs TV Shows by year', fontsize=16, color='white')
        ax1.legend()
        ax1.grid(True, alpha=0.3)
        ax1.tick_params(colors='white')
        
        # By decade
        df['decade'] = (df['release_year'] // 10) * 10
        decade_counts = df['decade'].value_counts().sort_index()
        
        ax2.bar(decade_counts.index.astype(str), decade_counts.values, color=netflix_red)
        ax2.set_title('Content by decade', fontsize=16, color='white')
        ax2.tick_params(colors='white')
        
        plt.tight_layout()
        plt.savefig(f'{output_dir}/trends_analysis.png', dpi=300, bbox_inches='tight',
                    facecolor='#000000', edgecolor='none')
        plt.close()
    
    print("Visualizations saved")

def save_stats(stats, output_dir):
    """Save statistics"""
    report = {
        'metadata': {
            'generated_at': pd.Timestamp.now().isoformat(),
            'data_source': 'Real Netflix Data',
        },
        'stats': stats,
        'insights': [
            f"{stats['total']:,} titles analyzed",
            f"{stats['movies']:,} movies vs {stats['shows']:,} TV shows",
            f"{stats.get('countries', 0)} different countries",
            f"{stats.get('genres', 0)} genres listed"
        ]
    }
    
    with open(f'{output_dir}/stats.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print("Stats saved")

if __name__ == "__main__":
    main()