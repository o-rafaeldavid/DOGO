import { Tabs } from "expo-router";

export default function TabRouteLayout(){
    return(
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Início"
                }}
            />
            <Tabs.Screen 
                name="mapaTeste"
                options={{
                    title: "Mapa Teste"
                }}
            />
        </Tabs>
    )
}