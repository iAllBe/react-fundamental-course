import MySelect from "./select/MySelect";
import MyInput from "./input/MyInut";

export default function PostFilter({filter, setFilter}) {
    return (
        <>
            <MySelect
                value={filter.sort}
                onChange={v => setFilter({...filter, sort: v})}
                defaultValue={"Сортировка"}
                options={[
                    {value: "title", name: "По заголовку"},
                    {value: "body", name: "По описанию"}
                ]}
            />
            <MyInput
                placeholder="Поиск"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
        </>
    )
}