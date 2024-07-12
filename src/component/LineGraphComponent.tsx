import { LineChart, lineDataItem } from 'react-native-gifted-charts';
import { mockNetValues } from '../model/mock';
import { Button, Center, HStack, Text } from 'native-base';
import { useState } from 'react';
import { NetValue } from '../model/NetValue';
import { Dimensions } from 'react-native';
import { DateTime } from 'luxon';

export function LineGraphComponent() {
    const timeFrames = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1Y');
    const screenWidth = Dimensions.get('window').width;
    // filter data based on time frame
    const filterData = (timeFrame: string, values: NetValue[]) => {
        console.log('before filter', values);
        const endDate = DateTime.now();
        let startDate = endDate;
        switch (timeFrame) {
            case '1D':
                startDate = endDate.minus({ days: 1 });
                break;
            case '1W':
                startDate = endDate.minus({ weeks: 1 });
                break;
            case '1M':
                startDate = endDate.minus({ months: 1 });
                break;
            case '3M':
                startDate = endDate.minus({ months: 3 });
                break;
            case '1Y':
                startDate = endDate.minus({ years: 1 });
                break;
            case '5Y':
                startDate = endDate.minus({ years: 5 });
                break;
        }
        const filteredData = values
            .filter(
                (value) =>
                    value.date.toMillis() >= startDate.toMillis() &&
                    value.date.toMillis() <= endDate.toMillis(),
            )
            .map((value) => ({
                value: value.value,
                // label: value.date.toFormat('yyyy-MM-dd'),
            }));
        console.log(filteredData);

        return filteredData.length > 0
            ? filteredData
            : [{ value: 0, label: 'No data' }];
    };

    const data: lineDataItem[] = filterData(selectedTimeFrame, mockNetValues);
    console.log('mockNetValues', mockNetValues);
    console.log('today', new Date());
    console.log('data 2023 1 1', new Date(2023, 0, 1));
    return (
        <Center w="full">
            <Text fontSize="xl" fontWeight="bold" my={2}>
                ${data[data.length - 1]?.value.toFixed(2)}
            </Text>
            <LineChart
                data={data}
                curved
                curveType={1}
                curvature={1}
                hideDataPoints
                hideYAxisText
                thickness={2}
                color="#6366f1"
                yAxisThickness={0}
                xAxisThickness={0}
                isAnimated
                width={screenWidth}
                height={200}
            />
            <HStack space={4}>
                {timeFrames.map((timeFrame) => (
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
