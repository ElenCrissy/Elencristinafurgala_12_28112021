import styled from "styled-components";
import calories from "../../../assets/energy.svg";
import proteins from "../../../assets/chicken.svg";
import carbohydrates from "../../../assets/apple.svg";
import lipids from "../../../assets/cheeseburger.svg";
import PropTypes from "prop-types";

const KpiContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: #FBFBFB;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img{
    width: 20px;
    height: 20px;
    padding: 15px;
    border-radius: 5px;
    margin-left: 15px;
  }
`
const KpiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 5px;
  p{
    margin: 0px;
  }
  p:first-child{
    font-weight: bold;
  }
  p:last-child{
    color: grey;
    font-size: 12px;
    margin-top: 3px;
  }
`

/**
 * Returns DOM element of a Kpi
 * @param { Object } props
 * @param { String } props.kpiName
 * @param { Number } props.kpiValue
 * @return { JSX.Element }
 */

const KpiComponent = (props) => {
    return(
        <KpiContainer>
            {props.kpiName === "calorieCount" ? (<img src={calories} alt="" style={{background: "rgb(255, 0, 0, 0.1)"}}/>) : null}
            {props.kpiName === "proteinCount" ? (<img src={proteins} alt="" style={{background: "rgb(74, 184, 255, 0.1)"}}/>) : null}
            {props.kpiName === "carbohydrateCount" ? (<img src={carbohydrates} alt="" style={{background: "rgb(249, 206, 35, 0.1)"}}/>) : null}
            {props.kpiName === "lipidCount" ? (<img src={lipids} alt="" style={{background: "rgb(253, 81, 129, 0.1)"}}/>) : null}

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

KpiComponent.propTypes = {
    kpiName : PropTypes.string,
    kpiValue : PropTypes.number
}

export default KpiComponent