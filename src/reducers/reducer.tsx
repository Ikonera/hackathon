export const initialState = {
    numberPeople: 0,
    homeEnergyClassment: 0,
    homeEnergyConsumption : {
        labelConsumption: 0,
        checkBoxConsumption : false
    },
    homeEquipment : {
        television : {
            checkBoxTv: false,
            numberTv: 0
        },
        computer: {
            checkBoxComputer: false,
            numberComputer: 0
        }
    }
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "NBPEOPLE":
            return {
                ...state,
                numberPeople: action.value
            }
        case "ENERGYCLASSMENT":
            return {
                ...state,
                homeEnergyClassment: action.value
            }
        case 'ENERGYCONSUMPTIONCHECK':
            return {
                ...state,
                checkBoxConsumption: action.value
            }
        case 'ENERGYCONSUMPTIONLABEL':
            if (action.checkbox) {
                return {
                    ...state,
                    labelConsumption: 0
                }
            } else {
                return {
                    ...state,
                    labelConsumption: action.type
                }
            }
        case 'TELEVISIONCHECK':
            return {
                ...state,
                checkBoxTV: action.value
            }

        case 'TELEVISIONNB':
            if(action.checkbox) {
                return {
                    ...state,
                    televisionNumber: action.value
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;
