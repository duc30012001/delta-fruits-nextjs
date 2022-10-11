import { useState } from "react";

const Filter = ({ filter }) => {
    const [filters, setFilters] = useState({
        price: [],
        type: [],
        size: [],
    });

    // console.log("temp");
    const handleFilter = (option) => {
        console.log(option);
        // let temp = { ...filters };
        // if (option.max) {
        //     temp[option.type].push(option.max, option.min);
        // } else {
        //     // const index = temp[option.type].findIndex(option.value);
        //     // index === -1 ? temp[option.type].push(option.value) : temp[option.type].splice(index, 1);
        //     // console.log(temp[option.type]);
        //     temp[option.type].push(option.value);
        // }
        // console.log(temp);
        // setFilters(temp);
    };

    return (
        <aside className="aside-item filter-price">
            <div className="aside-title">
                <h2 className="title-head margin-top-0">
                    <span>{filter.title}</span>
                </h2>
            </div>
            <div className="aside-content filter-group">
                <ul>
                    {filter.options.map((option, index) => {
                        return (
                            <li onClick={() => handleFilter(option)} key={index} className="filter-item filter-item--check-box filter-item--green">
                                <span>
                                    <label
                                        // data-filter="100-000d"
                                        htmlFor={option.id}
                                    >
                                        <input type="checkbox" id={option.id} value="(&lt;100000)" />
                                        {/* <i className="fa"></i> */}
                                        {option.value}
                                    </label>
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Filter;
