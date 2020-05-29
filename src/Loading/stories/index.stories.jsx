import React from "react";
import Loading from "../index";

export default {
    title: "Loading",
    component: Loading,
};

export const Delay = () => <Loading delay={1000} />;

export const NoDelay = () => <Loading delay={0} />;
