import React, { useState, useEffect } from 'react';

function Dropdowns({ data, onChange }) {
    const [crop, setCrop] = useState('');
    const [typeOfLand, setTypeOfLand] = useState('');
    const [stageOfCrop, setStageOfCrop] = useState('');

    useEffect(() => {
        if (crop && typeOfLand && stageOfCrop) {
            onChange(crop, typeOfLand, stageOfCrop);
        }
    }, [crop, typeOfLand, stageOfCrop, onChange]);

    const handleCropChange = (event) => {
        setCrop(event.target.value);
    };

    const handleTypeOfLandChange = (event) => {
        setTypeOfLand(event.target.value);
    };

    const handleStageOfCropChange = (event) => {
        setStageOfCrop(event.target.value);
    };

    return (
        <div>
            <div className='form5-input'>
                <span>Crop</span>
                <select className='calc-dropdown5' value={crop} onChange={handleCropChange}>
                    <option value="">Select Crop</option>
                    {data.crops.map((cropOption) => (
                        <option key={cropOption} value={cropOption}>
                            {cropOption}
                        </option>
                    ))}
                </select>
            </div>
            <br></br>
            <div className='form5-input'>
                <span>Type of Land</span>
                <select className='calc-dropdown5' value={typeOfLand} onChange={handleTypeOfLandChange}>
                    <option value="">Select Type of Land</option>
                    {data.typesOfLand.map((landOption) => (
                        <option key={landOption} value={landOption}>
                            {landOption}
                        </option>
                    ))}
                </select>
            </div>
            <br></br>
            <div className='form5-input'>
                <span>Stage of Crop</span>
                <select className='calc-dropdown5' value={stageOfCrop} onChange={handleStageOfCropChange}>
                    <option value="">Select Stage of Crop</option>
                    {data.stagesOfCrop.map((stageOption) => (
                        <option key={stageOption} value={stageOption}>
                            {stageOption}
                        </option>
                    ))}
                </select>
            </div>
            <br></br>
        </div>
    );
}

export default Dropdowns;
