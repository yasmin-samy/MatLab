/*
 * File: Task5.h
 *
 * Code generated for Simulink model 'Task5'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Apr 06 01:38:38 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Task5_h_
#define RTW_HEADER_Task5_h_
#include <stddef.h>
#include <string.h>
#ifndef Task5_COMMON_INCLUDES_
# define Task5_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Task5_COMMON_INCLUDES_ */

#include "Task5_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block signals (auto storage) */
typedef struct {
  real_T In1;                          /* '<S2>/In1' */
} B_Task5_T;

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  struct {
    void *AQHandles;
  } HiddenToAsyncQueue_InsertedFor_;   /* synthesized block */

  uint8_T is_active_c3_Task5;          /* '<Root>/Chart' */
  uint8_T temporalCounter_i1;          /* '<Root>/Chart' */
} DW_Task5_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_Task5_T;

/* Real-time Model Data Structure */
struct tag_RTM_Task5_T {
  const char_T * volatile errorStatus;
};

/* Block signals (auto storage) */
extern B_Task5_T Task5_B;

/* Block states (auto storage) */
extern DW_Task5_T Task5_DW;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Task5_T Task5_Y;

/* Model entry point functions */
extern void Task5_initialize(void);
extern void Task5_step(void);
extern void Task5_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Task5_T *const Task5_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'Task5'
 * '<S1>'   : 'Task5/Chart'
 * '<S2>'   : 'Task5/Function-Call Subsystem'
 */
#endif                                 /* RTW_HEADER_Task5_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
