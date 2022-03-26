const App =() => (
    <div>
        <Person
        name="Eliza Richards"
        age={29}
        FavoriteFood="tapas"
        hobbies="hiking"
        />
        <Person
        name="Teo Barrasota"
        age={65}
        FavoriteFood="sushi"
        hobbies="making pottery"
        />
        <Person
        name="Denise Lao"
        age={37}
        FavoriteFood="cerviche"
        hobbies="watching Netflix"
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));