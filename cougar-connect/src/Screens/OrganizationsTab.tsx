import { View, Text , FlatList, StyleSheet } from 'react-native';
import { ScreenHeight, ScreenWidth } from '../Components/Dimensions';
import { colors } from "../Components/Colors";
import EventCards from "../Components/EventCards";


function OrganizationsTab({ navigation }: { navigation: any }) {

    // Arry of events we want to render
    const events = [
        {
            id: "1",
            eventName: "You know what it is",
            organizerName: "Mihir Sahu",
            eventLocation: "CougarCS Discord Server",
            eventDateTime: [new Date, new Date],
        },
        {
            id: "2",
            eventName: "You know what it is",
            organizerName: "Mihir Sahu",
            eventLocation: "CougarCS Discord Server",
            eventDateTime: [new Date, new Date],
        },
        {
            id: "3",
            eventName: "You know what it is",
            organizerName: "Mihir Sahu",
            eventLocation: "CougarCS Discord Server",
            eventDateTime: [new Date, new Date],
        },
        {
            id: "4",
            eventName: "You know what it is",
            organizerName: "Mihir Sahu",
            eventLocation: "CougarCS Discord Server",
            eventDateTime: [new Date, new Date],
        }
    ];

    const renderEventCards = (eventName: string, organizerName: string, eventLocation: string, eventDateTime: Date[], cardSize: string) => {

        return (
            <EventCards eventName={eventName} organizerName={organizerName} eventLocation={eventLocation} eventDateTime={eventDateTime} cardSize={cardSize}></EventCards>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.black, paddingBottom: ScreenHeight * .1}}>
            <FlatList
                data={events}
                renderItem={({item}) => renderEventCards(item.eventName, item.organizerName, item.eventLocation, item.eventDateTime, "new")}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separatorComponent}></View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    separatorComponent: {
        height: ScreenHeight * .02,
    },
});

export default OrganizationsTab;
