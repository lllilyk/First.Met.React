function CardStyle(props) {

    const { feeling, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 30,
                padding: 30,
                width: 300,
                height: 150,
                textAlign: "center",
                borderRadius: 100,
                color: "white",
                boxShadow: "0px 0px 5px brown",
                backgroundColor: backgroundColor || "black",
            }
        }>
            {feeling && <h3>{feeling}</h3>}
            {children}
        </div>
    );
}

export default CardStyle;