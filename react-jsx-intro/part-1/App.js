function App()  {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name ="Yay area" />
        </div>
    );
};

ReactDOM.render( <App /> , document.getElementByID("root"));