import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  background-color: white;
  padding: 5px 0px;
  width: 80px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: (0, 0, 0, 0.7);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;
const Colors = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#2c2c2c");
  const [rangeValue, setRangeValue] = useState("2.5");
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.6;

    const context = canvas.getContext("2d");
    context.strokeStyle = color;
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

  const handleColorClick = (event) => {
    const color = event.target.style.backgroundColor;
    setColor(color);
  };

  return (
    <>
      <canvas
        style={{
          border: "1px solid white",
          borderRadius: 15,
          boxShadow:
            " 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          backgroundColor: "white",
          marginBottom: "1.5rem",
        }}
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      />
      <div className="text-center lg:w-2/3 w-full">
        <div style={{ marginBottom: "1.5rem" }}>
          <input
            onChange={(e) => setRangeValue(e.target.value)}
            type="range"
            min="0.1"
            max="5.0"
            value={rangeValue}
            step="0.1"
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <Btn>Fill</Btn>
          <Btn>Save</Btn>
          <Btn>Init</Btn>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#2c2c2c" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "white" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#ff3b30" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#ff9500" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#ffcc00" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#4cd963" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#5ac8fa" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#0579ff" }}
          ></Colors>
          <Colors
            onClick={handleColorClick}
            style={{ backgroundColor: "#5856d6" }}
          ></Colors>
        </div>
      </div>
    </>
  );
};

export default Canvas;
