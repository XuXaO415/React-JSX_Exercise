function App()  {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name ="Yay area" />
        </div>
    );
};

// const App = () => (
//     <div>
//         <FirstComponent />
//         <NamedComponent name="Yay area" />
//     </div>
// );

ReactDOM.render( <App />, document.getElementById("root"));