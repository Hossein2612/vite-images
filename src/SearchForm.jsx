import { useGlobalContext } from './Context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();

        const searchValue = e.target.elements.search.value;

        if (!searchValue) {
            return;
        }

        setSearchTerm(searchValue);
    };

    return (
        <section>
            <h2 className="title">unsplash imaes</h2>
            <form className="serch-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    placeholder="cat"
                    className="form-input search-input"
                />
                <button type="submit" className="btn">
                    search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
