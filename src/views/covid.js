import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";
import "./Covid.scss"
const Covid = () => {
    // const today = moment().startOf('day').toISOString(true);;
    // const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    const { data: dataCovid, isLoading, isError }
        = useFetch('https://covid-api.com/api/reports?date=2020-03-14&q=China%20Beijing&iso=CHN&region_name=China&region_province=Beijing')
        // = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)

    // console.log("check data covid", dataCovid.data.length);
    return (
        < >
            <h3>Covid 19 tracking in VietNam:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>


                    {isError === false && isLoading === false && dataCovid.data && dataCovid.data.length > 0 &&
                        dataCovid.data.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.date}</td>
                                    <td>{item.confirmed}</td>
                                    <td>{item.active}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.recovered}</td>
                                </tr>
                            )
                        })
                    }

                    {isLoading === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
                    }


                    {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                        </tr>
                    }

                </tbody>

            </table>
        </>
    )
}

export default Covid;