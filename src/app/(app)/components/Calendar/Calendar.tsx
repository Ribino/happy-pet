'use client'
import { Calendar as ReactCalendar } from 'react-calendar' 
import './calendar.css'
import moment from 'moment'
import 'moment/locale/pt-br'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { useRef, useState } from 'react'
import _ from 'lodash'

function ForceUpdate() {
   const [value, setValue] = useState(0);
   return () => setValue(value => value + 1);
}

interface Props {
   showBackground?: boolean
   multipleSelect?: boolean
   hightlightDates?: Date[]
   selectedDates?: Date[]
   disabledDates?: Date[]
}

export default function Calendar(props: Props) {
   const update = ForceUpdate();
   const [selectedDate, setSelectedDate] = useState<Date>();
   const selectedDates = useRef<Date[]>(props.selectedDates ?? [])
   
   if(props.multipleSelect && !_.isUndefined(selectedDate)) {
     
      selectedDates.current.push(selectedDate)
   }

   function onClickDate(date:Date) {
      if(props.multipleSelect) {
        
         if(isIncludeDate(selectedDates.current, date)) {
            const momenDate = moment(date)
            const indexOfDelete = selectedDates.current.findIndex(selectedDate => momenDate.isSame(selectedDate));
            selectedDates.current.splice(indexOfDelete, 1);
            setSelectedDate(undefined)
            update();
            return;
         }
         setSelectedDate(date)
         return;
      }

      setSelectedDate(moment(date).isSame(selectedDate) ? undefined : date);
   }

   function formatMonthYear(date: Date): string {
      return upperCaseFirstLetter(moment(date).format('MMMM, YYYY'))
   }

   function formatMonth(date: Date): string {
      return upperCaseFirstLetter(moment(date).format('MMM').toUpperCase())
   }

   function shouldHightlighDate(date: Date) {
      const highlightDates = props.hightlightDates ?? [];
      return isIncludeDate(highlightDates, date)
   }

   function shouldDisabledDate(date: Date) {
      const disabledDates = props.disabledDates ?? [];
      return isIncludeDate(disabledDates, date)
   }

   function isSelectedDate(date: Date) {
      if(props.multipleSelect) {
         return isIncludeDate(selectedDates.current, date)
      }
      return moment(date).isSame(selectedDate)
   }

   return (
      <>
         <ReactCalendar locale='pt-Br' calendarType='Hebrew'  defaultView='month'
            onClickDay={(date) => onClickDate(date)}
            minDate={new Date()} 
            formatMonthYear={(locale, date) => formatMonthYear(date) } 
            formatMonth={(locale, date) => formatMonth(date)}
            tileDisabled={(args) => shouldDisabledDate(args.date)}
            tileClassName={(args) => {
                  if(isSelectedDate(args.date)) {
                     return 'selectedDate'
                  }
                  if(shouldHightlighDate(args.date)) {
                     return 'hightlightDate'
                  }
                  return '';
               } 
            }
            prev2Label={null} next2Label={null} prevLabel={<MdNavigateBefore className={'navigate_icon'}/>}  nextLabel={<MdNavigateNext className={'navigate_icon'}/>}
            className={`${props.showBackground ? 'showBackground' : ''}`} />
      </>
   )
}


function upperCaseFirstLetter(value: string) {
   const firstLetter = value.charAt(0);
   const remaing = value.slice(1);
   return firstLetter.toUpperCase().concat(remaing);
}

function isIncludeDate(dates:Date[], date:Date) {
   if(dates.length == 0) return false;
   const momentDate = moment(date)
   for(let highlightDate of dates) {
      if(momentDate.isSame(highlightDate)) {
         return true;
      }
   }
   return false;
}