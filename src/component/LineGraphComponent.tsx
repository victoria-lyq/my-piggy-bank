import { Button, Center, Container, HStack, Text } from 'native-base';
import React, { useMemo, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { DateTime } from 'luxon';
import { LineChart, ruleTypes } from 'react-native-gifted-charts';
import { netValueData } from '../model/mock';
export function LineGraphComponent() {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1Y');
    const screenWidth = Dimensions.get('window').width;
    const graphData = useMemo(() => {
        switch (selectedTimeFrame) {
            // case '1D':
            //     return netValueData.today.data;
            case '1W':
                return netValueData.week.data;
            case '1M':
                return netValueData.month.data;
            case '1Y':
                return netValueData.year.data;
            default:
                return netValueData.today.data;
        }
    }, [selectedTimeFrame]);

    const graphTime = useMemo(() => {
        switch (selectedTimeFrame) {
            case '1D':
                return netValueData.today.time;
            case '1W':
                return netValueData.week.time;
            case '1M':
                return netValueData.month.time;
            case '1Y':
                return netValueData.year.time;
            default:
                return netValueData.today.time;
        }
    }, [[selectedTimeFrame]]);

    console.log(graphData);

    return (
        <Center
        // w="full"
        >
            <LineChart
                areaChart
                endFillColor={'#eef2ff'}
                startFillColor={'#a5b4fc'}
                startOpacity={0.8}
                endOpacity={0.3}
                data={graphData}
                interpolateMissingValues
                curved
                curveType={0}
                color={'#6366f1'}
                hideDataPoints
                hideYAxisText
                hideRules
                xAxisThickness={0}
                yAxisThickness={0}
                adjustToWidth
                disableScroll
                onPress={(item) => console.log('item onPress: ', item)}
                pointerConfig={{
                    pointerStripHeight: 200,
                    pointerStripColor: '#c7d2fe',
                    pointerStripWidth: 2,
                    pointerColor: '#c7d2fe',
                    pointerLabelWidth: 110,
                    pointerLabelHeight: 30,
                    activatePointersOnLongPress: true,
                    autoAdjustPointerLabelPosition: true,
                    pointerLabelComponent: (items) => {
                        console.log(items);
                        return (
                            <Container
                                justifyContent={'center'}
                                alignItems={'center'}
                                justifyItems={'center'}
                            >
                                <Text color={'indigo.600'}>
                                    {items[0].date}
                                </Text>
                            </Container>
                        );
                    },
                }}
            />
            <HStack space={4}>
                {['1W', '1M', '1Y'].map((timeFrame) => (
                    <Button
                        size="sm"
                        colorScheme="indigo"
                        key={timeFrame}
                        variant={
                            selectedTimeFrame === timeFrame
                                ? 'solid'
                                : 'outline'
                        }
                        onPress={() => setSelectedTimeFrame(timeFrame)}
                    >
                        {timeFrame}
                    </Button>
                ))}
            </HStack>
        </Center>
    );
}
