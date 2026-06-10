import {getPagesArray} from "../../../utils/page";

export default function Pagination({totalPages, setPage, page}) {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => setPage(p)}
                    key={p}
                    className={p === page ? 'page page__current' : 'page'}
                >{p}</span>
            )}
        </div>
    );
}