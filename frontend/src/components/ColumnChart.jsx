import { useComputed, useSignal } from '@preact/signals-react'
import { calculateYAxisValues } from '../utils/calculateYAxisValues'

export default function ColumnChart({ title, data, xKey, yKeys, keyLabels }) {
    const yAxisValues = useComputed(() => {
        let values = []
        for (let i in yKeys) { values.push(calculateYAxisValues(data, yKeys[i], 3)) }
        return values
    })

    const hoveredColumnIndex = useSignal(null)

    const handleToolTipContent = () => {
        let content;

        if (keyLabels) {
            content = keyLabels.map(item => [item])
            for (let i in content) content[i].push(data[hoveredColumnIndex.value][i == 0 ? xKey : yKeys[i - 1]])
        }
        else {
            content = [...xKey, ...yKeys].map(item => [item])
            for (let i in content) content[i].push(data[hoveredColumnIndex.value][content[i][0]])
        }

        return content
    }

    const ToolTip = ({ content }) => {
        return (
            <div className="tool-tip">
                <span className="arrow" />
                <div className="content">
                    {content.map((contentItem, contentItemIndex) =>
                        <div key={contentItemIndex}>
                            <span>{contentItem[0]}</span>
                            <span>{contentItem[1]}</span>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="column-chart">
            <div className="chart-header">
                <span className="title">{title}</span>
                <div className="color-info">
                    {(keyLabels.slice(1) || yKeys).map((item, index) =>
                        <div key={index}>
                            <span className={`color${index + 1}`} />
                            <span>{item}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="chart-body">
                {data.map((dataItem, dataItemIndex) =>
                    <div className="chart-body-item" onMouseOver={() => hoveredColumnIndex.value = dataItemIndex} onMouseLeave={() => hoveredColumnIndex.value = null} key={dataItemIndex}>
                        {yKeys.map((yKey, yKeyIndex) =>
                            <div className={`column color${yKeyIndex + 1}`} style={{ height: `${(dataItem[yKey] / yAxisValues.value[yKeyIndex][0]) * 100}%` }} key={yKeyIndex} />
                        )}
                        {(hoveredColumnIndex.value == dataItemIndex) && <ToolTip content={handleToolTipContent()} />}
                    </div>
                )}
            </div>
        </div>
    )
}