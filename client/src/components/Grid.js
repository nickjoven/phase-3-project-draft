import MiniFrame from "./MiniFrame";
import Cell from "./Cell";

const Grid = ({ sequence, toggleStep, steps, lineMap }) => (
    <MiniFrame rows={lineMap.length} columns={steps}>
        {sequence.map((line, i) =>
            line.map((time, j) => (
                <Cell
                    key={i + j}
                    column={j + 1}
                    row={i + 1}
                    activated={sequence[i][j]["activated"]}
                    triggered={sequence[i][j]["triggered"]}
                    onClick={() => toggleStep(i, j)}
                />
            ))
        )}
    </MiniFrame>
);

export default Grid;
