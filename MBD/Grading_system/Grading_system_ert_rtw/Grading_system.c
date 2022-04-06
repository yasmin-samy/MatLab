/*
 * File: Grading_system.c
 *
 * Code generated for Simulink model 'Grading_system'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Mar 21 18:12:06 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Grading_system.h"
#include "Grading_system_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Grading_system_T Grading_system_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Grading_system_T Grading_system_Y;

/* Real-time model */
RT_MODEL_Grading_system_T Grading_system_M_;
RT_MODEL_Grading_system_T *const Grading_system_M = &Grading_system_M_;

/* Model step function */
void Grading_system_step(void)
{
  real_T In1;

  /* If: '<Root>/If' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<S2>/In1'
   */
  if ((!((Grading_system_U.In1 >= 85.0) && (Grading_system_U.In1 < 100.0))) && (
       !((Grading_system_U.In1 >= 75.0) && (Grading_system_U.In1 < 85.0)))) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    In1 = Grading_system_U.In1;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
  }

  /* End of If: '<Root>/If' */

  /* If: '<Root>/If1' */
  if ((In1 >= 65.0) && (In1 < 75.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem4' incorporates:
     *  ActionPort: '<S5>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant4'
     *  Inport: '<S5>/In1'
     */
    Grading_system_Y.Out1 = 3.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem4' */
  } else if ((In1 >= 50.0) && (In1 < 65.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem5' incorporates:
     *  ActionPort: '<S6>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant5'
     *  Inport: '<S6>/In1'
     */
    Grading_system_Y.Out1 = 4.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem5' */
  } else {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant6'
     *  Inport: '<S3>/In1'
     */
    Grading_system_Y.Out1 = 5.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem2' */
  }

  /* End of If: '<Root>/If1' */
}

/* Model initialize function */
void Grading_system_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Grading_system_M, (NULL));

  /* external inputs */
  Grading_system_U.In1 = 0.0;

  /* external outputs */
  Grading_system_Y.Out1 = 0.0;
}

/* Model terminate function */
void Grading_system_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
