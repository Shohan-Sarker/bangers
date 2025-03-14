export const bangs = [
  {
    "name": "Google",
    "title": "Search the Web",
    "shortcut": "g",
    "link": "https://www.google.com/search?q={{{s}}}",
    "category": "General Search"
  },
  {
    "name": "DuckDuckGo",
    "title": "Privacy-focused Search Engine",
    "shortcut": "ddg",
    "link": "https://duckduckgo.com/?q={{{s}}}",
    "category": "General Search"
  },
  {
    "name": "Apple",
    "title": "Apple Homepage",
    "shortcut": "apple",
    "link": "https://www.apple.com",
    "category": "General"
  },
  {
    "name": "ChatGPT",
    "title": "OpenAI ChatGPT",
    "shortcut": "gpt",
    "link": "https://chat.openai.com/?q={{{s}}}",
    "category": "AI"
  },
  {
    "name": "DuckDuckGo Chat",
    "title": "DuckDuckGo Chat (AI)",
    "shortcut": "duckchat",
    "link": "https://duckduckgo.com/?t=h_&q={{{s}}}&ia=chat",
    "category": "AI"
  },
  {
    "name": "YouTube",
    "title": "Watch Videos Online",
    "shortcut": "yt",
    "link": "https://www.youtube.com/results?search_query={{{s}}}",
    "category": "Multimedia"
  },
  {
    "name": "YouTube Music",
    "title": "Search YouTube Music",
    "shortcut": "myt",
    "link": "https://music.youtube.com/search?q={{{s}}}",
    "category": "Multimedia"
  },
  {
    "name": "Spotify (spotify)",
    "title": "Search Spotify",
    "shortcut": "spotify",
    "link": "https://open.spotify.com/search/{{{s}}}",
    "category": "Multimedia"
  },
  {
    "name": "Spotify (spot)",
    "title": "Search Spotify",
    "shortcut": "spot",
    "link": "https://open.spotify.com/search/{{{s}}}",
    "category": "Multimedia"
  },
  {
    "name": "Spotify (spt)",
    "title": "Search Spotify",
    "shortcut": "spt",
    "link": "https://open.spotify.com/search/{{{s}}}",
    "category": "Multimedia"
  },
  {
    "name": "Rotten Tomatoes",
    "title": "Search Rotten Tomatoes",
    "shortcut": "rottentomatoes",
    "link": "http://www.rottentomatoes.com/search/?search={{{s}}}",
    "category": "Multimedia"
  },
  {
    "name": "How Long to Beat",
    "title": "Search How Long to Beat",
    "shortcut": "hlb",
    "link": "http://howlongtobeat.com/?q={{{s}}}",
    "category": "Entertainment"
  },
  {
    "name": "IGDB",
    "title": "Search IGDB - Internet Game Database",
    "shortcut": "igdb",
    "link": "https://www.igdb.com/search?q={{{s}}}",
    "category": "Entertainment"
  },
  {
    "name": "Letterboxd",
    "title": "Search Letterboxd",
    "shortcut": "lb",
    "link": "https://letterboxd.com/search/{{{s}}}/",
    "category": "Entertainment"
  },
    {
    "name": "Stack Overflow",
    "title": "Q&A for Programmers",
    "shortcut": "so",
    "link": "https://stackoverflow.com/search?q={{{s}}}",
    "category": "Programming"
  },
  {
    "name": "GitHub",
    "title": "Where the world builds software",
    "shortcut": "gh",
    "link": "https://github.com/search?q={{{s}}}",
    "category": "Programming"
  },
  {
    "name": "SteamDB",
    "title": "Search SteamDB",
    "shortcut": "steamdb",
    "link": "https://steamdb.info/search/?a=all&q={{{s}}}",
    "category": "Programming"
  },
    {
      "name": "ProtonDB",
      "title": "Search ProtonDB",
      "shortcut": "prdb",
      "link": "https://www.protondb.com/search?q={{{s}}}",
      "category": "Programming"
  },
  {
    "name": "IMDb",
    "title": "Internet Movie Database",
    "shortcut": "imdb",
    "link": "https://www.imdb.com/find?q={{{s}}}&s=all",
    "category": "Reference"
  },
  {
    "name": "Wikipedia",
    "title": "The Free Encyclopedia",
    "shortcut": "wiki",
    "link": "https://en.wikipedia.org/w/index.php?search={{{s}}}",
    "category": "Reference"
  },
  {
    "name": "Metacritic",
    "title": "Search Metacritic",
    "shortcut": "mc",
    "link": "http://www.metacritic.com/search/all/{{{s}}}/results",
    "category": "Reference"
  },
  {
    "name": "Anna's Archive",
    "title": "Search Anna's Archive",
    "shortcut": "anna",
    "link": "https://annas-archive.org/search?q={{{s}}}",
    "category": "Reference"
  },
  {
    "name": "Wayback Machine (General)",
    "title": "Internet Archive: Wayback Machine (General)",
    "shortcut": "wayback",
    "link": "https://web.archive.org/web/*/{{{s}}}",
    "category": "Reference"
  },
  {
    "name": "Wayback Machine (URL)",
    "title": "Wayback Machine for specific URL",
    "shortcut": "archived",
    "link": "https://web.archive.org/web/*/{{{s}}}",
    "category": "Reference"
  },
   {
    "name": "Reddit Google search",
    "title": "Search Reddit via Google",
    "shortcut": "!reddit",
    "link": "https://google.com/search?q=site%3Areddit.com+{{{s}}}",
    "category": "Specialized Search"
  },
  {
    "name": "Reddit Google search (Short)",
    "title": "Search Reddit via Google (Short)",
    "shortcut": "r",
    "link": "https://google.com/search?q=site%3Areddit.com+{{{s}}}",
    "category": "Specialized Search"
  },
  {
    "name": "Google (No Quora)",
    "title": "Google Search excluding Quora",
    "shortcut": "!noquora",
    "link": "https://www.google.com/search?q={{{s}}} -quora",
    "category": "Specialized Search"
  },
  {
    "name": "Google Translate (Auto -> English)",
    "title": "Translate from detected language to English",
    "shortcut": "gten",
    "link": "https://translate.google.com/#auto/en/{{{s}}}",
    "category": "Utilities"
  },
  {
    "name": "Maps",
    "title": "Google Maps",
    "shortcut": "map",
    "link": "https://www.google.com/maps/search/{s}",
    "category": "Utilities"
  },
  {
   "name": "Gmail",
   "title": "Search Gmail",
   "shortcut": "gmail",
   "link": "https://mail.google.com/mail/u/0/#search/{{{s}}}",
   "category": "Utilities"
  },
  {
      "name": "VirusTotal (URL)",
      "title": "Submit URL to VirusTotal",
      "shortcut": "virustotal",
      "link": "https://www.virustotal.com/url/submission/?force=1&url={{{s}}}",
      "category": "Utilities"
  },
  {
      "name": "WhoIsHostingThis",
      "title": "Find web hosting provider",
      "shortcut": "wiht",
      "link": "http://www.whoishostingthis.com/?q={{{s}}}",
      "category": "Utilities"
  },
  {
    "name": "Amazon",
    "title": "Online Shopping",
    "shortcut": "amz",
    "link": "https://www.amazon.com/s?k={{{s}}}",
    "category": "Shopping"
  },
  {
    "name": "Steam",
    "title": "Search Steam Store",
    "shortcut": "steam",
    "link": "https://store.steampowered.com/search/?term={{{s}}}",
    "category": "Shopping"
  },
  {
   "name": "Epic Games Store",
   "title": "Search Epic Games Store",
   "shortcut": "epic",
   "link": "https://store.epicgames.com/en-US/expanded-search-results?q={{{s}}}",
   "category": "Shopping"
  },
  {
    "name": "Bitwarden",
    "title": "Password Manager Search",
    "shortcut": "bw",
    "link": "https://vault.bitwarden.com/#/search/{s}",
    "category": "Utilities"
  }
]