# Frontend Task

Using an existing Movie API (https://www.themoviedb.org/documentation/api) provided by
The Movie DB, create a website using Vue, Vuex and LESS/SASS with the following
functionalities:

## Home Page
- Display all movies
- Include Sort options you think would fit best
- Search

## Details Page
- Title, summary, poster image, release date, director, language, cast, run time,
rating, similar movies, etc.
- Add the functionality to rate the movie (you can use any UI you wish for this)

## Stats Page ( Important )

- Using D3 charts create a simple bar chart for the top 10 rated movies with y-
axis being 0 – 10 (rating) and x-axis being the top 10 movies.
- Since a Movie can have a rating of 9.0 but had only been rated 2 times, let’s
make the stats a little more helpful to the viewers by adding a secondary bar
chart below with the Vote / Rating Count. This means the y-axis will now
represent the total times a movie has been rated and the x-axis will again
represent the top 10 movies.
- Use loading animation for the bars and tooltips for both charts.
- Use appropriate heading, axis titles and legends for each.

## Notes:
- Design / UI plays a big role in the assessment. Please refrain from using the ‘The
Movie DB’ UI.
- Bootstrap or any other boilerplate may be used for layout responsiveness, headings
and buttons but is not expected to be used as a website layout design.
- Create a Readme.txt file with remarks or reasons for any changes from the above.

# Up and running

1. Clone repository
2. Go to project directory:
   1. Setup project using command `npm install`
3. Run server using command `npm run serve`. Project will be available on `http://127.0.0.1:8080`

## All commands 

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for dev
```
npm run dev
```

# Endpoints

| Method | URI                                       | Description        |
| ------ | ----------------------------------------- | ------------------ |
| GET    | `movies`                                  | Show all movies    |
| GET    | `movies/{movie}/details`                  | Show movie details |
| GET    | `stats`                                   | Show stats         |