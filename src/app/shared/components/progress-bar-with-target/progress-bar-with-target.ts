import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

@Component({
  selector: 'progress-bar-with-target',
  imports: [],
  templateUrl: './progress-bar-with-target.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-beige-100 w-full flex items-center rounded h-2 p-0'
  }
})
export class ProgressBarWithTarget {
  // actual percentage
  previousPercentage = input.required<number>()

  // target percentage (percentage to reach)
  targetPercentage = input.required<number>()

  grayWidth = computed(() => {
    const previousPercentage = this.previousPercentage()
    const targetPercentage = this.targetPercentage()

    return Math.min(previousPercentage, targetPercentage)
  })

  colorWidth = computed(() => {
    const previousPercentage = this.previousPercentage()
    const targetPercentage = this.targetPercentage()

    return Math.abs(targetPercentage - previousPercentage)
  })

  color = computed(() => {
    const previousPercentage = this.previousPercentage()
    const targetPercentage = this.targetPercentage()

    if (previousPercentage > targetPercentage) {
      return '#C94736' // red
    }

    return '#277C78' // green
  })
}
