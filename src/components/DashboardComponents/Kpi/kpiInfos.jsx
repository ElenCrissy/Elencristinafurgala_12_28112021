import styled from "styled-components";
import calories from "../../../assets/energy.svg";
import proteins from "../../../assets/chicken.svg";
import carbohydrates from "../../../assets/apple.svg";
import lipids from "../../../assets/cheeseburger.svg";


const KpiContainer = styled.div`
  width: 180px;
  height: 80px;
  background-color: #FBFBFB;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
`
const KpiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  p{
    margin: 0px;
  }
  p:first-child{
    font-weight: bold;
  }
`

const KpiInfos = (props) => {



    return(
        <KpiContainer>
            {props.kpiName === "calorieCount" ? (<img src={calories} alt=""/>) : null}
            {props.kpiName === "proteinCount" ? (<img src={proteins} alt=""/>) : null}
            {props.kpiName === "carbohydrateCount" ? (<img src={carbohydrates} alt=""/>) : null}
            {props.kpiName === "lipidCount" ? (<img src={lipids} alt=""/>) : null}

            <KpiWrapper>
                <p>{props.kpiValue}{props.kpiName === "calorieCount" ? "kCal" : "g"}</p>
                <p>
                    {props.kpiName === "calorieCount" ? "Calories" : null}
                    {props.kpiName === "proteinCount" ? "Lipides" : null}
                    {props.kpiName === "carbohydrateCount" ? "Glucides" : null}
                    {props.kpiName === "lipidCount" ? "Lipides" : null}
                </p>
            </KpiWrapper>
        </KpiContainer>
    )

}

export default KpiInfos