import "./Suggestions.css";
import { Avatar } from "@mui/material";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { getRecommendation } from "../../../features/userSlice";
import { isAxiosError } from "axios";
import Suggestion from "./Suggestion";

type Recommendation = {
  _id: string,
  avatar: string,
  name: string
}

function Suggestions() {
  const recommendations: any = useSelector((state: any) => state.data.user.users)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchRecommendationData() {
      try {
        await dispatch(getRecommendation())
      } catch (error) {
        if (isAxiosError(error)) {
          console.error(error);
        } else {
          console.error(error);
        }
      }
    }
    fetchRecommendationData();
  }, [])

  return (
    <div className="suggestions">
      <div className="suggestions__title">
        為你推薦
      </div>

      {recommendations && recommendations.map((recommendation: Recommendation) => {
        return <Suggestion _id={recommendation._id} avatar={recommendation.avatar} name={recommendation.name}/>
      })}     
    </div>
  )
}

export default Suggestions
