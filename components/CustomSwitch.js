import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";


const CustomSwitch = ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) => {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const upDateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={{
            width: '100%',
            height: 44,
            backgroundColor: '#e4e4e4',
            borderRadius: 10,
            borderColor: '#AD40AF',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            {/* switch one */}
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => upDateSwitchData(1)}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4'
                }}
            >
                <Text style={{
                    color: getSelectionMode == 1 ? 'white' : '#AD40AF',
                    fontSize: 14,
                }}>{option1}</Text>
            </TouchableOpacity>

            {/* switch two */}

            <TouchableOpacity
                activeOpacity={2}
                onPress={() => upDateSwitchData(2)}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4'
                }}
            >
                <Text style={{
                    color: getSelectionMode == 2 ? 'white' : '#AD40AF',
                    fontSize: 14,
                }}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomSwitch