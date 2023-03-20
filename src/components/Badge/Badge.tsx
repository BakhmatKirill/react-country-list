import React from 'react';
type BadgeLabel = 'area' | 'population';

interface BadgeProps {
    color: string;
    value: number;
    label: BadgeLabel;
}
export const Badge = ({ color, value, label }: BadgeProps) => {
    return (
    <p className={`col-2 p-3 m-3 badge ${color}`}>{label}: {value}</p>
    );
};
