import React, { useState, useEffect, useMemo } from 'react'
import { useCustomizeContext } from '../../../../../../contexts/CustomizeContext'
import { useNavigate } from 'react-router';
import { AppInfo } from "../../../../../../redux/features/createapp"
import { useDispatch } from 'react-redux';

export default function Bottom() {
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const path = window.location.pathname?.split('/')
	const app = { app_id: path[1] };

	const {
		bottomBar: {
			bottomBarTabs,
			setBottomBarTabs,
			bottomMenuBackgroundColor,
			setBottomMenuBackgroundColor,
			itemColorInHex,
			setItemColorInHex,
			itemColorInFilter,
			setItemColorInFilter,
			showText,
			setShowText,
			selectedItemColorInHex,
			setSelectedItemColorInHex,
			selectedItemColorInFilter,
			setSelectedItemColorInFilter
		},
	} = useCustomizeContext()

	useEffect(() => {
		(async () => {
			const resp = await dispatch(AppInfo(app))
			const bottombar = resp.app_details?.App_Info?.bottombar
			console.log('itemsssssssssss')

			if (bottombar.bottomMenuItems.length) {
				setBottomBarTabs(bottombar.bottomMenuItems)
				setBottomMenuBackgroundColor(bottombar.bottomMenuBackgroundColor)

				setSelectedItemColorInHex(bottombar.bottomMenuSelectedItemHexColor)
				setSelectedItemColorInFilter(bottombar.bottomMenuSelectedItemFilterColor)

				setItemColorInHex(bottombar.bottomMenuItemHexColor)
				setItemColorInFilter(bottombar.bottomMenuItemFilterColor)

				setShowText(bottombar.bottomMenuTextShow)
			}

		})();
	}, [])
	console.log(bottomBarTabs, "bottomBarTabs")


	useEffect(() => {
		if (typeof index !== 'undefined') {
		}
	}, [...bottomBarTabs.map(tab => tab.show)])

	const filterArray = itemColorInFilter.split(/[()]/)
	const selectedFilterArray = selectedItemColorInFilter.split(/[()]/)

	const style = {
		webkitFilter:
			filterArray.length > 5
				? `invert(${filterArray[1]}) sepia(${filterArray[3]}) saturate(${filterArray[5]}) hue-rotate(${filterArray[7]}) brightness(${filterArray[9]}) contrast(${filterArray[11]})`
				: 'invert(100%) sepia(99%) saturate(2%) hue-rotate(286deg) brightness(105%) contrast(101%)',
	}

	const selectedStyle = {
		webkitFilter:
			selectedFilterArray.length > 5
				? `invert(${selectedFilterArray[1]}) sepia(${selectedFilterArray[3]}) saturate(${selectedFilterArray[5]}) hue-rotate(${selectedFilterArray[7]}) brightness(${selectedFilterArray[9]}) contrast(${selectedFilterArray[11]})`
				: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(267deg) brightness(106%) contrast(101%)',
	}

	const inline = {
		filter: "invert(100%) sepia(99%) saturate(2%) hue-rotate(286deg) brightness(105%) contrast(101%)"
	}

	return (
		<div
			class='footer-bar'
			style={{
				backgroundColor: `${bottomMenuBackgroundColor}`,
				display: 'flex',
				justifyContent: 'space-around',
			}}
		>
			{bottomBarTabs &&
				bottomBarTabs.map((tab, index) => {
					const { title, icon, checked, show, route } = tab
					return (
						show && (
							<div class='icon-bar' id={`${index}`}>
								<button style={{ width: '68px', display: "inline" }}>
									{
										<img
											className='mr-0'
											src={icon}
											style={{
												...(checked ? selectedStyle : style),
												height: '30px',
												width: '30px',
												// filter: "invert(100%) sepia(99%) saturate(2%) hue-rotate(286deg) brightness(105%) contrast(101%)"
											}}

										/>
									}
									{title !== '' && showText && (
										<p
											style={{
												color: `${checked === true
													? selectedItemColorInHex
													: itemColorInHex
													}`,
												fontSize: '13px',
											}}
										>
											{title}
										</p>
									)}
								</button>
							</div>
						)
					)
				})}
		</div>
	)
}
