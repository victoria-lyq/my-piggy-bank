import { Box, Button, Center, Container, HStack, Text } from 'native-base';
import React, { useMemo, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { DateTime } from 'luxon';
import { LineChart, ruleTypes } from 'react-native-gifted-charts';
import { netValueData } from '../../model/mock';
export function LineGraphComponent() {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1Y');
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
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

    const minValue = Math.min(...graphData.map((item) => item.value));
    const maxValue = Math.max(...graphData.map((item) => item.value));

    return (
        <Center
        // w="full"
        >
            <Box
                bg={'#818cf8'}
                width={screenWidth}
                height={0.28 * screenHeight}
                justifyContent={'flex-end'}
            >
                <LineChart
                    data={graphData}
                    maxValue={maxValue}
                    showValuesAsDataPointsText
                    stepValue={maxValue / 4}
                    yAxisOffset={minValue / 2}
                    height={(1 / 4) * screenHeight}
                    width={screenWidth}
                    backgroundColor={'#818cf8'} //indigo.400
                    areaChart
                    isAnimated
                    animateOnDataChange
                    onDataChangeAnimationDuration={50}
                    startFillColor={'#e0e7ff'} //indigo.100 top color
                    startOpacity={0.65}
                    endFillColor={'#eef2ff'} //indigo.200 bottom color
                    endOpacity={0.2}
                    interpolateMissingValues
                    curved
                    curveType={0}
                    color={'#eef2ff'} //indigo.50
                    thickness={2.5}
                    hideDataPoints
                    hideYAxisText
                    hideRules
                    initialSpacing={0}
                    yAxisSide={1}
                    xAxisThickness={0}
                    yAxisThickness={0}
                    adjustToWidth
                    disableScroll
                    edgePosition={0}
                    onPress={(item) => console.log('item onPress: ', item)}
                    pointerConfig={{
                        height: 9,
                        width: 9,
                        radius: 5,
                        pointerStripHeight: 260,
                        pointerStripColor: '#c7d2fe', //indigo.200
                        pointerStripWidth: 4,
                        pointerColor: '#4f46e5', //indigo.600
                        pointerLabelWidth: 110,
                        // pointerLabelHeight: 20,
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
            </Box>
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
