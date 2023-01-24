import { setStatusBarHidden } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height  != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha peso e altura")
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput 
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 76.365"
                keyboardType="numeric"
                />
                <Button 
                onPress={() => validationImc()}
                title={textButton}
                />
            </View>
            <ResultImc messageResultImc=(messageImc) resultImc=(imc) />
        </View>
    );
}