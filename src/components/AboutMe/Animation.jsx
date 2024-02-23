import AnimatedCursor from "react-animated-cursor";

const Animation = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={25}
                outerSize={25}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={8}
                outerStyle={{ border: '1px solid gray' }}
            />
        </div>
    );
};

export default Animation;