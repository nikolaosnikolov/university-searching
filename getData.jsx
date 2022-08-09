function App() {
    const { Container } = ReactBootstrap;
    const { useState, useEffect } = React;
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState("Greece");
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState(
        "http://universities.hipolabs.com/search?country=Greece"
    );
    const [isLoading, setIsLoading] = React.useState(false);

    const body = document.body

    useEffect(() => {   // Handles the LifeCycle Events
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData({ hits: result.data });
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [url]);
    return (
        <Container>
            <form id="formSearching"
                onSubmit={event => {
                    setUrl(`http://universities.hipolabs.com/search?country=${query}`);
                    event.preventDefault();
                }}
            >
                <input
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button id="submitButton" type="submit">Search</button>
            </form>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul className="list-group">
                    {data.hits.map((item, index) => (
                        <li onClick={() => { modal(body, item.name, item.country, item.alpha_two_code, item.domains[0]) }} className="list-group-item" id="listedItem" key={index}>
                            <div id="nameOfUniversity">{item.name}</div>
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

const modal = (appendElement, universityName, universityLocation, universityCountry, univesrityWebpage) => {
    const myModal = document.createElement('div')
    const main = document.createElement('div')
    const background = document.createElement('div')
    const wrapper = document.createElement('div')
    const title = document.createElement('div')
    const content = document.createElement('div')
    const college = document.createElement('div')
    const collegeIcon = document.createElement('div')
    const collegeImage = document.createElement('img')
    const collegeInfo = document.createElement('div')
    const location = document.createElement('div')
    const locationIcon = document.createElement('div')
    const locationImage = document.createElement('img')
    const locationInfo = document.createElement('div')
    const country = document.createElement('div')
    const countryIcon = document.createElement('div')
    const countryImage = document.createElement('img')
    const countryInfo = document.createElement('div')
    const webpage = document.createElement('div')
    const webpageIcon = document.createElement('div')
    const webpageImage = document.createElement('img')
    const webpageInfo = document.createElement('div')

    const close = document.createElement('img')

    background.setAttribute('id', 'modalBackground')
    wrapper.setAttribute('id', 'modalWrapper')
    title.setAttribute('id', 'modalTitle')
    content.setAttribute('id', 'modalContent')
    close.setAttribute('id', 'modalClose')
    college.setAttribute('id', 'college')
    location.setAttribute('id', 'location')
    country.setAttribute('id', 'country')
    webpage.setAttribute('id', 'webpage')
    collegeIcon.setAttribute('id', 'collegeIcon')
    locationIcon.setAttribute('id', 'locationIcon')
    countryIcon.setAttribute('id', 'countryIcon')
    webpageIcon.setAttribute('id', 'webpageIcon')
    collegeInfo.setAttribute('id', 'collegeInfo')
    locationInfo.setAttribute('id', 'locationInfo')
    countryInfo.setAttribute('id', 'countryInfo')
    webpageInfo.setAttribute('id', 'webpageInfo')
    collegeImage.setAttribute('id', 'collegeImage')
    locationImage.setAttribute('id', 'locationImage')
    countryImage.setAttribute('id', 'countryImage')
    webpageImage.setAttribute('id', 'webpageImage')



    title.textContent = universityName
    collegeInfo.textContent = universityName
    locationInfo.textContent = universityLocation
    countryInfo.textContent = universityCountry
    webpageInfo.textContent = univesrityWebpage
    close.src = './images/x.png'
    collegeImage.src = './images/college.svg'
    locationImage.src = './images/location.svg'
    countryImage.src = './images/flag.svg'
    webpageImage.src = './images/website.svg'

    close.onclick = () => {
        myModal.style.setProperty('display', 'none')
    }


    webpageIcon.appendChild(webpageImage)
    webpage.appendChild(webpageIcon)
    webpage.appendChild(webpageInfo)
    countryIcon.appendChild(countryImage)
    country.appendChild(countryIcon)
    country.appendChild(countryInfo)
    locationIcon.appendChild(locationImage)
    location.appendChild(locationIcon)
    location.appendChild(locationInfo)
    collegeIcon.appendChild(collegeImage)
    college.appendChild(collegeIcon)
    college.appendChild(collegeInfo)
    content.appendChild(college)
    content.appendChild(location)
    content.appendChild(country)
    content.appendChild(webpage)
    wrapper.appendChild(title)
    wrapper.appendChild(content)
    wrapper.appendChild(close)
    background.appendChild(wrapper)
    main.appendChild(background)
    myModal.appendChild(main)
    appendElement.appendChild(myModal)
}