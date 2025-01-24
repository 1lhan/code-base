import ColumnChart from "../components/ColumnChart"

export default function Home() {
    const data = [
        ['14.01.2025', 1.29, 170],
        ['15.01.2025', 1.21, 298],
        ['16.01.2025', 1.28, 248],
        ['17.01.2025', 1.17, 304],
        ['18.01.2025', 1.31, 337],
        ['19.01.2025', 1.26, 346],
        ['20.01.2025', 0.89, 163],
        ['21.01.2025', 0.88, 172]
    ]

    const data2 = [
        { date: '14.01.2025', price: 1.29, volume: 170 },
        { date: '15.01.2025', price: 1.21, volume: 298 },
        { date: '16.01.2025', price: 1.28, volume: 248 },
        { date: '17.01.2025', price: 1.17, volume: 304 },
        { date: '18.01.2025', price: 1.31, volume: 337 },
        { date: '19.01.2025', price: 1.26, volume: 346 },
        { date: '20.01.2025', price: 0.89, volume: 163 },
        { date: '21.01.2025', price: 0.88, volume: 172 }
    ]

    return (
        <div className="home-page container">
            <div className="column-chart-wrapper">
                <ColumnChart title="Test Column Chart" data={data} xKey={0} yKeys={[1, 2]} keyLabels={['date', 'price', 'volume']} />
            </div>
        </div>
    )
}