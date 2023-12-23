export interface IRecipesData {
    id: number,
    title: string,
    likes: number,
    time: number,
    img_url: string,
}

export const RecipesData: IRecipesData[] = [
    {
        id: 1,
        title: "Пицца маргарита на слоеном тесте",
        likes: 125,
        time: 22,
        img_url: "https://ic.pics.livejournal.com/fullandhappy/44098195/679056/679056_original.jpg",
    },
    {
        id: 2,
        title: "Паста Паппарделье",
        likes: 245,
        time: 38,
        img_url: "https://i.pinimg.com/originals/67/5a/67/675a674f8f9eeaa6c2f66a628f2f817d.jpg",
    },
    {
        id: 3,
        title: "Пицца Лазаньетте",
        likes: 174,
        time: 45,
        img_url: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663657098_7-mykaleidoscope-ru-p-nastoyashchaya-italyanskaya-pitstsa-krasiv-8.jpg",
    },
    {
        id: 4,
        title: "Канапе с российским сыром, апельсиновым конфи и мятой",
        likes: 142,
        time: 34,
        img_url: "https://i.pinimg.com/originals/36/4d/c2/364dc27a27edaf35c7d91cb31b743306.jpg",
    }
    ,
    {
        id: 5,
        title: "Микс салат с сыром, клубникой, апельсином",
        likes: 174,
        time: 27,
        img_url: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666319617_35-mykaleidoscope-ru-p-salat-s-rukkoloi-i-kamamberom-instagram-35.jpg",
    }
    ,
    {
        id: 6,
        title: "Салат с жареным сыром",
        likes: 174,
        time: 52,
        img_url: "https://donatewales.org/wp-content/uploads/0/9/9/099467200268754bac67cdf437ab306d.jpeg",
    }
]