import AssetsComponent from "./AssetsComponent";
import { mockAssets } from "../model/mock";
import { ScrollView } from "native-base";
import { LineGraphComponent } from "./LineGraphComponent";

export function HomePage() {
    return (
        <ScrollView w={"full"} h={"full"} alignContent={"center"} justifyItems={"center"}>
            <LineGraphComponent />
            <AssetsComponent assets={mockAssets} />
        </ScrollView>

    );
}