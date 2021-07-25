import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [ctx, setCtx] = useState();
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight * 0.5;

        const context = canvas.getContext("2d");
        context.strokeStyle = "black";
        context.lineWidth = 2.5;
        contextRef.current = context;

        setCtx(context);
    }, []);

    const startDrawing = (event) => {
        event.persist();
        setIsDrawing(true);
    };
    const finishDrawing = () => {
        setIsDrawing(false);
    };
    const drawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;

        if (ctx) {
            if (!isDrawing) {
                ctx.beginPath();
                ctx.moveTo(offsetX, offsetY);
            } else {
                ctx.lineTo(offsetX, offsetY);
                ctx.stroke();
            }
        }
    };

    return (
        <canvas
            style={{ border: "1px solid black" }}
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={drawing}
            onMouseLeave={finishDrawing}
        ></canvas>
    );
};

export default Canvas;
