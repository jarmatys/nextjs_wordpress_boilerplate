export const scrollTo = (destination) => {
    const element = document.querySelector(`#${destination}`)
    const topPos = element.getBoundingClientRect().top + window.pageYOffset - 50;

    window.scrollTo({
        top: topPos,
        behavior: "smooth"
    });
};

export const jsonFetcher = (url) => fetch(url).then((res) => res.json());