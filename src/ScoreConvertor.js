import React,{useEffect,useState} from "react";
import Select from "react-select"
const ScoreConvertor = () => {

     const [selectedValue, setSelectedValue] = useState(0)
    const [errMsg, setErrMsg] = useState("")
    const [convertPro, setConvertPro] = useState(null);
    const [convertResult, setConvertResult] = useState(null);
    const options = [
        { value: 'PTE', label: 'PTE' },
        { value: 'DUOLINGO', label: 'DUOLINGO' },
        { value: 'IELTS', label: 'IELTS' },
        { value: 'TOEFL', label: 'TOEFL' },
    ]

    const scoreFormat =
        [
            {
                "PROFICIENCY LEVEL": "EXPERT",
                "IELTS": 9,
                "TOEFL": "118-120",
                "PTE": "89-90",
                "DUOLINGO": "155-160"
            },
            {
                "PROFICIENCY LEVEL": "VERY BEST",
                "IELTS": 8.5,
                "TOEFL": "115-117",
                "PTE": "83-85",
                "DUOLINGO": "145-150"
            },
            {
                "PROFICIENCY LEVEL": "VERY GOOD",
                "IELTS": 8,
                "TOEFL": "110-114",
                "PTE": "74-84",
                "DUOLINGO": "135-140"
            },
            {
                "PROFICIENCY LEVEL": "BETTER",
                "IELTS": 7.5,
                "TOEFL": "102-109",
                "PTE": "73-77",
                "DUOLINGO": "125-130"
            },
            {
                "PROFICIENCY LEVEL": "GOOD",
                "IELTS": 7,
                "TOEFL": "94-101",
                "PTE": "64-72",
                "DUOLINGO": "115-120"
            },
            {
                "PROFICIENCY LEVEL": "VERY COMPETENT",
                "IELTS": 6.5,
                "TOEFL": "79-93",
                "PTE": "58-63",
                "DUOLINGO": "105-110"
            },
            {
                "PROFICIENCY LEVEL": "COMPETENT",
                "IELTS": 6,
                "TOEFL": "60-78",
                "PTE": "50-57",
                "DUOLINGO": "95-100"
            },
            {
                "PROFICIENCY LEVEL": "VERY MODEST",
                "IELTS": 5.5,
                "TOEFL": "46-59",
                "PTE": "42-49",
                "DUOLINGO": "85-90"
            },
            {
                "PROFICIENCY LEVEL": "MODEST",
                "IELTS": 5,
                "TOEFL": "35-45",
                "PTE": "35-41",
                "DUOLINGO": "75-85"
            },
            {
                "PROFICIENCY LEVEL": "LIMITED",
                "IELTS": 4.5,
                "TOEFL": "32-34",
                "PTE": "30-34",
                "DUOLINGO": "60-70"
            },
            {
                "PROFICIENCY LEVEL": "EXTREMELY LIMITED",
                "IELTS": 4,
                "TOEFL": "0-31",
                "PTE": "0-30",
                "DUOLINGO": "55-60"
            }
        ]


        const handleConvert = () => {
        const score = Number(document.getElementById('score-input').value);
        if (isNaN(score)) {
            setErrMsg("Please Enter a valid Number")
        };
        const test = selectedValue;
        if (test === 0) {
            setErrMsg("Please select test type")
        } else if (test === "PTE") {
            if (score < 0 || score > 100) {
                setErrMsg("Please enter valid PTE score.")
            } else {
                scoreFormat.map((scores) => {
                    const valueScore = scores[test].split("-");
                    if (score >= Number(valueScore[0]) && score <= Number(valueScore[1])) {
                        setConvertPro(scores["PROFICIENCY LEVEL"])
                    }
                })
            }
        } else if (test === "DUOLINGO") {
            if (score < 55 || score > 160) {
                setErrMsg("Please enter valid PTE score.")
            } else {
                scoreFormat.map((scores) => {
                    const valueScore = scores.DUOLINGO.split("-");
                    if (score >= Number(valueScore[0]) && score <= Number(valueScore[1])) {
                        setConvertPro(scores["PROFICIENCY LEVEL"])
                    }
                })
            }
        }
        else if (test === "TOEFL") {
            if (score < 0 || score > 120) {
                setErrMsg("Please enter valid PTE score.")
            } else {
                scoreFormat.map((scores) => {
                    const valueScore = scores.TOEFL.split("-");
                    if (score >= Number(valueScore[0]) && score <= Number(valueScore[1])) {
                        setConvertPro(scores["PROFICIENCY LEVEL"])
                    }
                })
            }
        }
        else if (test === "IELTS") {
            if (score < 0 || score > 9) {
                setErrMsg("Please enter valid IELTS score.")
            } else {
                scoreFormat.map((scores) => {
                    if (score === Number(scores.IELTS)) {
                        setConvertPro(scores["PROFICIENCY LEVEL"])
                    }
                })
            }
        }
    }


    useEffect(() => {
        scoreFormat.map((scores) => {
            if (scores["PROFICIENCY LEVEL"] === convertPro) {
                setConvertResult(scores)
            }
        })
    }, [convertPro])

    const handleChange = e => {
        setErrMsg("")
        setSelectedValue(e.value);
    }
    return (
        <>
         <div className="">
                        <div className="text-center">
                            <h1 className="text-white mt-5">Score Convertor</h1>
                        </div>
                        <div className="container py-5">
                            <div className="container d-flex justify-content-center px-0">
                                <div className="d-flex">
                                    <input type="text" id="score-input" className="form-control score-checker-input" onChange={() => { setErrMsg("") }} placeholder="Enter your score..." />
                                    <div className="select-wrapper">
                                        <Select className="score-dropdown" isSearchable="false"
                                            options={options}
                                            value={options.find(obj => obj.value === selectedValue)}
                                            onChange={handleChange}
                                        />
                                    </div>


                                </div>
                            </div>
                            <div className="convert-error fw-bold text-center mt-3 text-danger">{errMsg}</div>
                            <div className="text-center mt-3">
                                <button onClick={handleConvert} className="btn convert-btn">Convert</button>
                            </div>
                        </div>
                        {convertResult !== null &&
                            <div className="converted-data-container">
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="result-name-child">
                                        <h1 className="test-name">
                                            PTE
                                        </h1>
                                        <div className="result-marks">
                                            <span className="converted-result">{convertResult["PTE"]}</span>
                                        </div>
                                    </div>
                                    <div className="result-name-child">
                                        <h1 className="test-name">
                                            IELTS
                                        </h1>
                                        <div className="result-marks">
                                            <span className="converted-result">{convertResult["IELTS"]}</span>
                                        </div>

                                    </div>
                                    <div className="result-name-child">
                                        <h1 className="test-name">
                                            TOEFL
                                        </h1>
                                        <div className="result-marks">
                                            <span className="converted-result">{convertResult["TOEFL"]}</span>
                                        </div>

                                    </div>
                                    <div className="result-name-child">
                                        <h1 className="test-name">
                                            DUOLINGO
                                        </h1>
                                        <div className="result-marks">
                                            <span className="converted-result">{convertResult["DUOLINGO"]}</span></div>

                                    </div>
                                </div>
                            </div>
                        }
                    </div>
        </>
    );
}

export default ScoreConvertor;