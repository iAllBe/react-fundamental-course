export default function MySelect({defaultValue, options, onChange, value}) {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option
                value=""
                disabled
            >{defaultValue}</option>
            {options.map(o =>
                <option
                    key={o.value}
                    value={o.value}
                >{o.name}</option>
            )}
        </select>
    );
}