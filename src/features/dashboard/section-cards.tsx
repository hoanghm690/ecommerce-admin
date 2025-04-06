import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'

import { Badge, Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components'

const data = [
  {
    title: 'Total Revenue',
    value: '$1,250.00',
    trend: 'up',
    percentage: '+12.5%',
    footerText: 'Trending up this month',
    subtext: 'Visitors for the last 6 months'
  },
  {
    title: 'New Customers',
    value: '1,234',
    trend: 'down',
    percentage: '-20%',
    footerText: 'Down 20% this period',
    subtext: 'Acquisition needs attention'
  },
  {
    title: 'Active Accounts',
    value: '45,678',
    trend: 'up',
    percentage: '+12.5%',
    footerText: 'Strong user retention',
    subtext: 'Engagement exceed targets'
  },
  {
    title: 'Growth Rate',
    value: '4.5%',
    trend: 'up',
    percentage: '+4.5%',
    footerText: 'Steady performance increase',
    subtext: 'Meets growth projections'
  }
]

export function SectionCards() {
  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4'>
      {data.map(({ title, value, trend, percentage, footerText, subtext }, index) => {
        const Icon = trend === 'up' ? IconTrendingUp : IconTrendingDown
        return (
          <Card key={index} className='@container/card'>
            <CardHeader>
              <CardDescription>{title}</CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>{value}</CardTitle>
              <CardAction>
                <Badge variant='outline'>
                  <Icon />
                  {percentage}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                {footerText} <Icon className='size-4' />
              </div>
              <div className='text-muted-foreground'>{subtext}</div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
