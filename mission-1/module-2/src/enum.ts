enum PrintMedia {
        Newspaper,
        Newletter,
        Magazine,
        Book
}

const  getMedia = (mediaName:string): PrintMedia => {
        if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
                return PrintMedia.Book;
            }
}

const mediaType:PrintMedia = getMedia("Forbes")
console.log(mediaType)