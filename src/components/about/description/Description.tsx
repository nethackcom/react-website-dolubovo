import {Container} from "../../common/common.styled";
import BucketOfMilk from "../../../assets/images/bucket_of_milk.png"
import {CardDescription} from "./CardDescription";


export const Description = () => {
    return (
        <>
            <Container>
                <CardDescription title={"Все начинается со свежего молока"} image={BucketOfMilk}>
                    <p>
                        Мы уверены, что хорошие молочные продукты начинаются с хорошего молока, а оно начинается с богатых зеленых пастбищ полных свежей травы.
                    </p>
                    <p>
                        Наши поставщики обеспечивают нам молоко из самой естественной среды, где местные жители наслаждаются нетронутым ландшафтом и чистым воздухом, в то время как коровы поглощают ароматную и свежую траву.
                    </p>
                </CardDescription>

                <CardDescription title={"Все начинается со свежего молока"} image={BucketOfMilk} reverse={true}>
                    <p>
                        Мы уверены, что хорошие молочные продукты начинаются с хорошего молока, а оно начинается с богатых зеленых пастбищ полных свежей травы.
                    </p>
                    <p>
                        Наши поставщики обеспечивают нам молоко из самой естественной среды, где местные жители наслаждаются нетронутым ландшафтом и чистым воздухом, в то время как коровы поглощают ароматную и свежую траву.
                    </p>
                </CardDescription>
            </Container>
        </>
    )
}