import MotherCheese from "../assets/images/mother_cheese.png"

export interface IPostsData {
    id: number,
    title: string,
    description: string | null,
    date: string,
    img_url: string | null,
}

export const PostsData: IPostsData[] = [
    {
        id: 1,
        title: "Сыр Долюбово признали лучшим в России",
        description: "Технология переработки молока не менее важна для нас, мы используем современное оборудование...",
        date: "12.05.2023",
        img_url: MotherCheese,
    },
    {
        id: 2,
        title: "В России стали меньше производить заменители сыра",
        description: null,
        date: "03.07.2023",
        img_url: null,
    },
    {
        id: 3,
        title: "«Долюбово» — натуральней, лучше, вкуснее!",
        description: null,
        date: "25.09.2023",
        img_url: null,
    }
]