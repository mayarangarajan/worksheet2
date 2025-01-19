erDiagram
    User {
        int user_id PK
        string name
        string spotify_id
    }
    Songs {
        int song_id PK
        string title
        string artist
        string album
        float danceability
        float energy
        int popularity
    }
    Artists {
        int artist_id PK
        string name
        int popularity
    }
    User_Top_Songs {
        int user_id FK
        int song_id FK
        int rank
    }
    Analysis {
        int analysis_id PK
        int user_id FK
        string bubble_tea
        string season
        string energy_level
        datetime timestamp
    }

    User ||--o{ User_Top_Songs : "has"
    Songs ||--o{ User_Top_Songs : "appears in"
    User ||--o{ Analysis : "has"
