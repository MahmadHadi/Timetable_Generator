import React from "react";
import Card from "../Components/Card";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const DisplayTimetable = () => {
    const days = {
        Monday: [
            {
                sub: "WD",
                teacherName: "DRC",
                time: "10:45 to 11:45",
                loc: "FF - 11",
            },
            {
                sub: "WEV",
                teacherName: "PVG",
                time: "11:45 to 12:45",
                loc: "FF - 11",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "12:45 to 1:15",
                loc: "---",
            },
            {
                sub: "C1 - GD",
                teacherName: "SDG",
                time: "1:15 to 3:15",
                loc: "FF - 31",
            },
            {
                sub: "C2 - DS",
                teacherName: "SHC",
                time: "1:15 to 3:15",
                loc: "FF - 25",
            },
            {
                sub: "C3 - WD",
                teacherName: "THD",
                time: "1:15 to 3:15",
                loc: "GF - 20",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "3:15 to 3:30",
                loc: "---",
            },
            {
                sub: "DS",
                teacherName: "SHC",
                time: "3:30 to 4:30",
                loc: "FF - 11",
            },
            {
                sub: "MATH-2",
                teacherName: "HMP",
                time: "4:30 to 5:30",
                loc: "FF - 11",
            },
        ],

        Tuesday: [
            {
                sub: "PHY",
                teacherName: "RKT",
                time: "10:45 to 11:45",
                loc: "FF - 12",
            },
            {
                sub: "CHEM",
                teacherName: "MNL",
                time: "11:45 to 12:45",
                loc: "FF - 12",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "12:45 to 1:15",
                loc: "---",
            },
            {
                sub: "MATH",
                teacherName: "PRK",
                time: "1:15 to 3:15",
                loc: "FF - 15",
            },
            {
                sub: "C2 - PHY LAB",
                teacherName: "NMS",
                time: "1:15 to 3:15",
                loc: "GF - 22",
            },
            {
                sub: "C3 - CHEM LAB",
                teacherName: "SKM",
                time: "1:15 to 3:15",
                loc: "GF - 25",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "3:15 to 3:30",
                loc: "---",
            },
            {
                sub: "ENV",
                teacherName: "LSR",
                time: "3:30 to 4:30",
                loc: "FF - 12",
            },
            {
                sub: "HIST",
                teacherName: "AKS",
                time: "4:30 to 5:30",
                loc: "FF - 12",
            },
        ],

        Wednesday: [
            {
                sub: "BIO",
                teacherName: "SKR",
                time: "10:45 to 11:45",
                loc: "FF - 14",
            },
            {
                sub: "MATH",
                teacherName: "HMP",
                time: "11:45 to 12:45",
                loc: "FF - 14",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "12:45 to 1:15",
                loc: "---",
            },
            {
                sub: "PHY LAB",
                teacherName: "NMS",
                time: "1:15 to 3:15",
                loc: "GF - 20",
            },
            {
                sub: "C2 - BIO LAB",
                teacherName: "JPS",
                time: "1:15 to 3:15",
                loc: "GF - 24",
            },
            {
                sub: "C3 - CHEM LAB",
                teacherName: "SKM",
                time: "1:15 to 3:15",
                loc: "GF - 25",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "3:15 to 3:30",
                loc: "---",
            },
            {
                sub: "CS",
                teacherName: "SVT",
                time: "3:30 to 4:30",
                loc: "FF - 14",
            },
            {
                sub: "ECON",
                teacherName: "DSK",
                time: "4:30 to 5:30",
                loc: "FF - 14",
            },
        ],

        Thursday: [
            {
                sub: "CHEM",
                teacherName: "MNL",
                time: "10:45 to 11:45",
                loc: "FF - 16",
            },
            {
                sub: "PHY",
                teacherName: "RKT",
                time: "11:45 to 12:45",
                loc: "FF - 16",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "12:45 to 1:15",
                loc: "---",
            },
            {
                sub: "MATH",
                teacherName: "PRK",
                time: "1:15 to 3:15",
                loc: "FF - 16",
            },
            {
                sub: "C2 - ENG",
                teacherName: "LMB",
                time: "1:15 to 3:15",
                loc: "GF - 18",
            },
            {
                sub: "C3 - BIO LAB",
                teacherName: "JPS",
                time: "1:15 to 3:15",
                loc: "GF - 21",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "3:15 to 3:30",
                loc: "---",
            },
            {
                sub: "HIST",
                teacherName: "AKS",
                time: "3:30 to 4:30",
                loc: "FF - 16",
            },
            {
                sub: "PHY",
                teacherName: "NMS",
                time: "4:30 to 5:30",
                loc: "FF - 16",
            },
        ],

        Friday: [
            {
                sub: "CS",
                teacherName: "SVT",
                time: "10:45 to 11:45",
                loc: "FF - 10",
            },
            {
                sub: "MATH",
                teacherName: "HMP",
                time: "11:45 to 12:45",
                loc: "FF - 10",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "12:45 to 1:15",
                loc: "---",
            },
            {
                sub: "PHY",
                teacherName: "RKT",
                time: "1:15 to 3:15",
                loc: "FF - 10",
            },
            {
                sub: "C2 - ECON",
                teacherName: "DSK",
                time: "1:15 to 3:15",
                loc: "GF - 19",
            },
            {
                sub: "C3 - CS LAB",
                teacherName: "SVT",
                time: "1:15 to 3:15",
                loc: "GF - 23",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "3:15 to 3:30",
                loc: "---",
            },
            {
                sub: "BIO",
                teacherName: "SKR",
                time: "3:30 to 4:30",
                loc: "FF - 10",
            },
            {
                sub: "ENG",
                teacherName: "LMB",
                time: "4:30 to 5:30",
                loc: "FF - 10",
            },
        ],

        Saturday: [
            {
                sub: "ENV",
                teacherName: "LSR",
                time: "10:45 to 11:45",
                loc: "FF - 17",
            },
            {
                sub: "MATH",
                teacherName: "PRK",
                time: "11:45 to 12:45",
                loc: "FF - 17",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "12:45 to 1:15",
                loc: "---",
            },
            {
                sub: "PHY LAB",
                teacherName: "NMS",
                time: "1:15 to 3:15",
                loc: "GF - 21",
            },
            {
                sub: "C2 - CHEM LAB",
                teacherName: "MNL",
                time: "1:15 to 3:15",
                loc: "GF - 22",
            },
            {
                sub: "C3 - BIO LAB",
                teacherName: "SKR",
                time: "1:15 to 3:15",
                loc: "GF - 23",
            },
            {
                sub: "BREAK",
                teacherName: "---",
                time: "3:15 to 3:30",
                loc: "---",
            },
            {
                sub: "ENG",
                teacherName: "LMB",
                time: "3:30 to 4:30",
                loc: "FF - 17",
            },
            {
                sub: "HIST",
                teacherName: "AKS",
                time: "4:30 to 5:30",
                loc: "FF - 17",
            },
        ],
    };

    return (
        <div className="w-full overflow-auto">
            <Splide
                options={{
                    type: "slide",
                    perPage: 3,
                    pagination: false,
                    arrows: true,
                    gap: "1rem",
                }}
            >
                {Object.keys(days).map((day, index) => (
                    <SplideSlide key={index}>
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl text-gray-700 font-semibold mb-4">
                                {day}
                            </h1>
                            {days[day].map((elem, idx) => (
                                <Card
                                    sub={elem.sub}
                                    teacherName={elem.teacherName}
                                    time={elem.time}
                                    loc={elem.loc}
                                    key={idx}
                                />
                            ))}
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default DisplayTimetable;
