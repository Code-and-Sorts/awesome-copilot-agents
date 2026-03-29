# az computeschedule

```bash
# VirtualMachinesCancelOperations: Cancel a previously submitted (start/deallocate/hibernate) request.
az computeschedule vm-cancel-operations

# VirtualMachinesExecuteDeallocate: Execute deallocate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
az computeschedule vm-execute-deallocate

# VirtualMachinesExecuteHibernate: Execute hibernate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
az computeschedule vm-execute-hibernate

# VirtualMachinesExecuteStart: Execute start operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
az computeschedule vm-execute-start

# VirtualMachinesGetOperationErrors: Get error details on operation errors (like transient errors encountered, additional logs) if they exist.
az computeschedule vm-get-operation-errors

# VirtualMachinesGetOperationStatus: Polling endpoint to read status of operations performed on virtual machines.
az computeschedule vm-get-operation-status

# VirtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
az computeschedule vm-submit-deallocate

# VirtualMachinesSubmitHibernate: Schedule hibernate operation for a batch of virtual machines at datetime in future.
az computeschedule vm-submit-hibernate

# VirtualMachinesSubmitStart: Schedule start operation for a batch of virtual machines at datetime in future.
az computeschedule vm-submit-start
```
