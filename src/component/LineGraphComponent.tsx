import { LineChart, lineDataItem } from "react-native-gifted-charts";
import { mockNetValues } from "../model/mock";
import { Center } from "native-base";

export function LineGraphComponent() {
    const data: lineDataItem[] = mockNetValues.map((value) => ({ value: value.value, label: value.date.toDateString()}));
    

    return (
        <Center w="full" h="full">
            <LineChart data={data}/>
        </Center>
        
    )
}