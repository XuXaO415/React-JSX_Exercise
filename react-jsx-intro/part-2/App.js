const App=() => (
    <div>
        <Tweet
            username="XuxaO415"
            name="Christina"
            date={Date()}
            message="3rd° SF native, raised in the Mission 🌉"
        />
        <Tweet
            username="R.Sanchez"
            name="Rick Sanchez"
            date={Date()}
            message="To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you."
        />
        <Tweet
            username="SmithZZZ"
            name="Mortimer Smith"
            date={Date()}
            message="Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV. "
        />
        <Tweet
            username="hackReAcT"
            name="Goofy Goober"
            date={Date()}
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum velit nisi. Duis non condimentum."
        />
    </div>
);

ReactDOM.render(<App />,document.getElementById("root"));