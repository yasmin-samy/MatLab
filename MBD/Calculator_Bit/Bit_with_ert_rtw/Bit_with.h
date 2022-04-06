/*
 * File: Bit_with.h
 *
 * Code generated for Simulink model 'Bit_with'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Apr 02 16:17:38 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Bit_with_h_
#define RTW_HEADER_Bit_with_h_
#include <stddef.h>
#include <string.h>
#ifndef Bit_with_COMMON_INCLUDES_
# define Bit_with_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Bit_with_COMMON_INCLUDES_ */

#include "Bit_with_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  boolean_T In2;                       /* '<Root>/In2' */
  boolean_T In1;                       /* '<Root>/In1' */
} ExtU_Bit_with_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  boolean_T Out1;                      /* '<Root>/Out1' */
  boolean_T Out2;                      /* '<Root>/Out2' */
  boolean_T Out3;                      /* '<Root>/Out3' */
  boolean_T Out4;                      /* '<Root>/Out4' */
  boolean_T Out5;                      /* '<Root>/Out5' */
} ExtY_Bit_with_T;

/* Real-time Model Data Structure */
struct tag_RTM_Bit_with_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_Bit_with_T Bit_with_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Bit_with_T Bit_with_Y;

/* Model entry point functions */
extern void Bit_with_initialize(void);
extern void Bit_with_step(void);
extern void Bit_with_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Bit_with_T *const Bit_with_M;

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
 * '<Root>' : 'Bit_with'
 */
#endif                                 /* RTW_HEADER_Bit_with_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
